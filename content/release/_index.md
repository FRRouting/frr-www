---
Title: Releases
---

FRR is actively developed on [GitHub](https://github.com/FRRouting/frr).

Releases are cut when significant features are added or important bug fixes are
incorporated into FRR. This typically corresponds to a release cadence of
roughly every 4 months.

FRR distributes signed DEB and RPM packages along with Snap images.
Repositories for these can be found at the following locations:

* Debian Packages - https://deb.frrouting.org/
* RPM Packages - https://rpm.frrouting.org/
* Snaps - https://snapcraft.io/frr

Docker images are also available on a best-effort basis. Until FRR 8.4.1,
Docker images were uploaded to Dockerhub with the tag scheme
`frrouting/frr:vX.Y.Z` where `X.Y.Z` is the version number (e.g. FRR 8.4.1 was
tagged `frrouting/frr:v8.4.1`).

Starting with FRR 8.4.2, we have switched to Quay.io for image hosting. The tag
scheme has changed and is now `quay.io/frrouting/frr:X.Y.Z` where `X.Y.Z` is
the version number (e.g. FRR 8.4.2 is tagged `frrouting/frr:8.4.2`).

Available tags may be viewed here:

https://quay.io/repository/frrouting/frr?tab=tags

We plan to reupload all images that were previously uploaded to Dockerhub to
Quay over time.

Source tarballs and release notes are posted on GitHub:

https://github.com/FRRouting/frr/releases

Installation instructions are available in the [user docs](https://docs.frrouting.org/en/latest/installation.html).

Release notes are also posted to this website, and are identical to those on
GitHub.
