Provisioning for the CodePhoenix server.

# Prerequisites

- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#control-node-requirements)

# Installation

```bash
ansible-galaxy install -r requirements.yaml
```

# Usage

Install the server from the Ubuntu Server 22.04 iso.

Define a user during the installation wizard, report the username in the `group_vars/all/ansible.yaml` file.

Tell the installer to install the OpenSSH server, and nothing else.

Also specify your Github handle in order to get your public key from Github copied into the installed system.

Once the installation is finished, log into the server, and add the user to the sudoers users:

```bash
sudo usermod -aG sudo username
```

Add your public SSH key to the `~/.ssh/authorized_keys` file if it was not already put in place during the Ubuntu installtion.

Last thing to adapt, the server IP address. Report it in the `inventory` file.

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

Create a VirtualBox VM with the following settings:
- network: bridged to a network adapter that has access to the internet
- disk: enough to test your changes, 20GB should be enough
- RAM: 2GB should be enough
- CPU: 2 cores should be enough

Start by installing Ubuntu Server 22.04 in a VirtualBox VM, as described in the usage section.
    
Then, you can provision the VM as if it was the server. To be able to contact it from the host, you will need to have the network interface in bridge mode.

# Questions left to answer

[ ] How does the networking work? Is there a single NIC? Are there multiple? This will impact the LTSP installation
[ ] What distro to use for the client image? Same as the server with a chroot? A very lightweight one? See http://ltsp.org/docs/installation/#maintaining-a-client-image
