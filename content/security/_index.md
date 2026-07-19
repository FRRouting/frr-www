---
title: Security / Responsible Disclosure
---


Vulnerability discoveries affecting FRR are handled using industry standard
procedures, i.e. use of embargoes where appropriate and possible, as well as
assignment of CVE identifiers where needed.  Below is a reference for all
previous issues that received CVE identifiers.

If you encounter a security issue you'd like to report, please send an e-mail
to security at lists dot frrouting dot org.  In any such report, please:

* do not batch more than one report into a single e-mail.  Please send one
  e-mail per independent issue.
* while we appreciate reports for ``eigrpd`` and ``nhrpd``, these 2 daemons are
  documented in the [main FRR README file](https://github.com/FRRouting/frr/blob/master/README.md?plain=1#L32)
  as being in _alpha_ state and will not receive security advisories or CVE
  identifiers.
* if you believe it necessary we'll make arrangements for encrypted
  communication as needed.
* if you used AI or LLM tools to discover or explore the issue, we require that
  you disclose that fact.  In all cases, you are responsible for all contents
  of the report.
* except for machine translation, the security report e-mail itself must be
  written without the use of AI/LLM tools.  This is to demonstrate that you
  have understood and verified the issue you are reporting.
