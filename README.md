<p align="center">
  <img src="images/banner.png" width="600" />
</p>

Provisioning for the CodePhenix server.

# Prerequisites

- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#control-node-requirements)

# Installation

```bash
ansible-galaxy install -r requirements.yaml
```

# Usage

## Server installation

Install the server from the Ubuntu Server 22.04 iso.

Choose regular Ubuntu server over minimized version.

Check "Install OpenSSH server", and add a SSH identity from your Github handle.

Check "Allow password authentication" over SSH.

Define a user during the installation wizard, report the username in the `group_vars/all/ansible.yaml` file.

Do not choose any additional software to be installed.

Launch and finish the installation.

## Network configuration

Depending on your use case, you might need to configure the network differently.

Network is configured with Netplan, with configuration files located in `/etc/netplan/`.

For the light clients to be able to boot from the server, you need to configure the server with a static IP address on the network where the light clients will be.

You can use the following configuration as a base:

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: false
      dhcp6: false
      addresses:
        - 192.168.67.1/24
  wifis:
    wlp2s0:
      dhcp4: true
       access-points:
        "my-wifi":
          password: "my-password"
```

`192.168.67.1` is the default LTSP server IP address, you can change it if you want in the `group_vars/all/network.yaml` file.

If you make any change to this file and you don't want these changes to be further committed, you can ignore further modifications to this file:

```bash
git update-index --assume-unchanged group_vars/all/network.yaml
```

## Provisioning configuration

Now that the network is correctly configured, you need to configure the provisioning.

Log in the server, and get the network configuration with `ip addr`:
- report the server ip address in the `inventory` file
- ignore further modifications to this file: `git update-index --assume-unchanged inventory`

## Actual provisioning

The machine is now ready to be provisioned, you can now run from the host machine:

```bash
ansible-playbook -i inventory --ask-become-pass playbook.yaml
```

# Content

This provisioning starts with a plain Ubuntu 22 server edition.

# Development

In order to develop on this repository, you can use several virtual machines to test your changes.

## VirtualBox

You can use VirtualBox to create a virtual machine, and then provision it as if it was the server.
You'll later be able to create light clients with other virtual machines.

Create a VirtualBox VM with the following settings:
- network: bridged to a network adapter that **has access to the internet**
- disk: enough to test your changes, 50GB should be enough
- RAM: 2GB should be enough
- CPU: 2 cores should be enough
- select the Ubuntu Server 22.04 iso

Uncheck the "unserpervised installation" option, you'll need to configure the installation manually.

Boot the VM, and follow the `Usage` section above to install the server.

Once the server is provisioned, you need to make it run on a network where there is no DHCP server:
- shut down the VM
- go to the VM settings
- go to the network tab
- select the network adapter
- select "Bridge Adapter" in the "attached to" dropdown
- select the network adapter that has access to the internet (unplug the cable if you need to)
- click on "advanced"
- select "Allow all" in the "Promiscuous Mode" dropdown
- now boot the VM, it will get stuck for a few minutes on network configuration, but it will eventually boot
- run `ifconfig` to get the name of your network adapter (it will look like `enp0s3`)
- run `sudo ifconfig enp0s3 inet 192.168.67.1 netmask 255.255.255.0` (replace `enp0s3` with the name of your network adapter)

You can now create light clients on the same network:
- create a new VM without any iso nor any disk
- in the boot order, select "Network" first
- go to the network tab
- select the network adapter
- select "Bridge Adapter" in the "attached to" dropdown
- select the same network adapter as the server VM
- click on "advanced"
- select "Allow all" in the "Promiscuous Mode" dropdown
- boot the VM

It will now boot with iPXE, and will try to boot from the network. It will get an IP address from the server `dnsmasq` service, and will boot from the server.
