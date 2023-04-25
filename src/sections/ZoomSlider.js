import React, { useRef } from "react";
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { Button } from "@mui/material";

// Extracted the zoom controls to a separate component.
const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
    <>
        <Button sx={{background:"#fff" , margin:"10px"}} onClick={() => zoomIn()} key={1}>+</Button>
        <Button sx={{background:"#fff" , margin:"10px"}} onClick={() => zoomOut()} key={2}>-</Button>
        <Button sx={{background:"#fff" , margin:"10px"}} onClick={() => resetTransform()} key={3}>x</Button>
    </>
);

export default function ZoomSlider() {
    // Used useRef hook to create a mutable reference.
    const transformComponentRef = useRef(null);

    const zoomToImage = (e) => {
        // Check if the ref exists before accessing the method.
        if (transformComponentRef.current) {
            const { zoomToElement } = transformComponentRef.current;
            zoomToElement("imgExample");
        }
        console.log(e)
    };

    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            ref={transformComponentRef}
        >
            {utils => <>
                <Controls {...utils} />
                <TransformComponent>
                    <div onClick={zoomToImage}>
                        <img src={window.location.origin + "/assets/img/slide.jpg"} alt="slider" id="imgExample" />
                    </div>
                </TransformComponent>
            </>}
        </TransformWrapper>
    );
}
