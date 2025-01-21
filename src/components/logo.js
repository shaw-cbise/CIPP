import PropTypes from "prop-types";

export const Logo = (props) => {
  const i = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiMAAC4jAXilP3YAAAG7SURBVGhD1ZhdboMwEAaBw/QxygXao7XQo/UE+VFf2rME1x/yVqA49hrv2s5IEbECZCYOjkKnydfL4QMPN1Shd1txIG5PPuK5sdu3n8u0vCCMSsBantCKEA/wyRMaEaIBIXlCOkIsgCNPSEYMbptFijzojRF5X5A9A6nynTGfr79XsaU1K6C2PNgd0II82BXQijxIDmhJHiStBtry5+v3eDpdkmLZM1BC3h6z7G/meTweD6zfCVZASXmCGxENqCFPcCKCATXliVjEw4AW5IlQhHcV0pZ3BGd/TT8MD1enu5MUkl+wszDZ49/dMIpvJjYBJeWJ3Ij/gBryRE7EElBTntgb0bcgT+yJEPtnVIvn/wq58XNfxESNiBx5sAkAJSNy5cFdACgRISEPvKsQbjrh5pMbcrC785GSB94ZIFgzYcxkP312rKQ8CAaAYERleRANAN6IBuQBKwBsIhqRB+wAsEQY07ciD5ICUtGWB2oBJeSBSkApeSAeUFIeiAaUlgdiATXkgdg/MnO7ze5pFCl5IPoVws0n3IRyQy+S8kD8Ig5FSMsD8QDgi9CQByoBYB2hJa8OIvBwQwW67g/DKSsyrD3tggAAAABJRU5ErkJggg==;
  if (!i.includes("dMIpvJjYBJeWJ")) {
    throw "dMIpvJjYBJeWJ";
  }
  return <img src={i} alt="Logo" />;
};

Logo.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
};
