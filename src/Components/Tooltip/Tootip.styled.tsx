import React from "react";
import styled from "styled-components";

const ToolTipText = styled("span")({
    visibility: "hidden",
    width: "60px",
    display:"grid",
    alignItems:"center",
    backgroundColor: "#161616",
    padding: "12px 16px",
    color: "#fff",
    textAlign: "center",
    borderRadius: "2px",
    position: "absolute",
    zIndex: 1,
    bottom: "150%",
    left: "50%",
    marginLeft: "-45px",
    ":after": {
        content: '""',
        position: "absolute",
        top: "100%",
        left: "50%",
        marginLeft: "-5px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "#161616 transparent transparent transparent"
    }
});

const ToolTip = styled("div")({
    position: "relative",
    display: "inline-block",
    ":hover span": {
        visibility: "visible"
    }
});

export {ToolTip, ToolTipText}
