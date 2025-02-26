import React, { useRef, useEffect } from "react";

function Bai2() {
    const canvasRef = useRef(null);
    const requestRef = useRef();
    const currentWidthRef = useRef(5);
    const colorIndexRef = useRef(0);

    const minWidth = 5;
    const maxWidth = 700;
    const colors = ["red", "blue", "green", "purple", "orange"];

    const drawShape = (ctx) => {
        const currentWidth = currentWidthRef.current;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Tạo gradient từ màu chính sang màu trắng
        const gradient = ctx.createLinearGradient(0, 0, currentWidth, 0);
        gradient.addColorStop(0, colors[colorIndexRef.current]);
        gradient.addColorStop(1, "white");

        ctx.fillStyle = gradient;
        ctx.save();
        ctx.translate(100, 130);
        ctx.transform(1, 0, Math.tan(55 * Math.PI / 180), 1, 0, 0);
        ctx.rotate(20 * Math.PI / 180);
        ctx.fillRect(0, 0, currentWidth, 170);
        ctx.restore();
    };

    const animateShape = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        currentWidthRef.current += 1.5;
        if (currentWidthRef.current >= maxWidth) {
            currentWidthRef.current = minWidth;
            colorIndexRef.current = (colorIndexRef.current + 1) % colors.length;
        }

        drawShape(ctx);
        requestRef.current = requestAnimationFrame(animateShape);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        requestRef.current = requestAnimationFrame(animateShape);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, backgroundColor: "black" }} />;
}

export default Bai2;