import { useEffect, useRef, useState } from "react";

const Bai1 = () => {
    const canvasRef = useRef(null);
    const [size, setSize] = useState(20);
    const [speed, setSpeed] = useState(0.1); // Tăng chậm để mượt hơn

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let animationFrameId;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, size, 0, Math.PI * 2);
            ctx.fill();

            if (size >= 250) {
                setSize(20); // Khi đạt max, reset về min ngay lập tức
            } else {
                setSize((prev) => prev + speed); // Tăng kích thước dần dần
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [size]);

    return <canvas ref={canvasRef} style={{ background: "blue", display: "block" }} />;
};

export default Bai1;