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

Once the installation is finished, log into the server, and add the user to the sudoers users:

```bash
sudo usermod -aG sudo username
```

Then grant the right to sudo without a password to this user, editing the `/etc/sudoers` file as follows:

```
username  ALL=(ALL) NOPASSWD:ALL
```

Add your public SSH key to the `~/.ssh/authorized_keys` file.

Last thing to adapt, the server IP address. Report it in the `inventory` file.

The machine is now ready to be provisioned, you can now run from the host machine:

```bash
ansible-playbook -i inventory --ask-become-pass playbook.yaml
```

# Content

This provisioning starts with a plain Ubuntu 22 server edition.

# Questions left to answer

[ ] How does the networking work? Is there a single NIC? Are there multiple? This will impact the LTSP installation
[ ] What distro to use for the client image? Same as the server with a chroot? A very lightweight one? See http://ltsp.org/docs/installation/#maintaining-a-client-image
