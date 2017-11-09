# Security Issues and Announcements

If you need to report a security issue please email the [Security Alias](https://lists.frrouting.org/listinfo/security).

Subscribe to our Announcements [alias](https://lists.frrouting.org/listinfo/announce) to learn about these issues as soon as we post them.

| Issue          | Description                                                                                                                                                                                                                                                                                                            | Affected Version(s)        |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| [CVE-2017-15865](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15865) | Receipt of a BGP UPDATE message with a malformed path attribute length field from an established peer allows remote attackers to read up to 4075 bytes of bgpd program heap. The malformed field causes a BGP NOTIFY to be sent, but the malformed length field is used when computing the size of the data to return. | 2.0.0, 2.0.1, 3.0.0, 3.0.1 |
