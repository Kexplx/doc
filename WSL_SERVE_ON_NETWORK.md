1. Start `PowerShell ISE` as administrator
2. Run this Script (Add the ports you want to forward to `$ports`)
3. Start your server on WSL (e.g. `ng serve --host=0.0.0.0 --disable-host-check --port 4300`)
4. The server should be available on your network under the **IP Adress of the Windows Machine**.

```powershell
$remoteport = bash.exe -c "ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'"

# All the ports you want to forward separated by commas
$ports = @(4300, 4301);

# [Static IP]
# You can change the addr to your IP config to listen to a specific address
$addr = '0.0.0.0';
$ports_a = $ports -join ",";

# Check if the firewall rule exists and remove it if it does
$firewallRule = Get-NetFirewallRule -DisplayName 'WSL 2 Firewall Unlock' -ErrorAction SilentlyContinue
if ($firewallRule) {
    Remove-NetFirewallRule -DisplayName 'WSL 2 Firewall Unlock'
}

# Adding exception rules for inbound and outbound traffic
New-NetFirewallRule -DisplayName 'WSL 2 Firewall Unlock' -Direction Outbound -LocalPort $ports_a -Action Allow -Protocol TCP
New-NetFirewallRule -DisplayName 'WSL 2 Firewall Unlock' -Direction Inbound -LocalPort $ports_a -Action Allow -Protocol TCP

# Configure port forwarding
for ($i = 0; $i -lt $ports.length; $i++) {
    $port = $ports[$i]
    netsh interface portproxy delete v4tov4 listenport=$port listenaddress=$addr
    netsh interface portproxy add v4tov4 listenport=$port listenaddress=$addr connectport=$port connectaddress=$remoteport
}
```
