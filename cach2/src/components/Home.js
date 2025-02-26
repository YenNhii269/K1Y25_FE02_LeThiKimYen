import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const bai1 = () => {
        navigate("/bai1");
    };

    const bai2 = () => {
        navigate("/bai2");
    };

    return (
        <div className="container mt-3">
            <h1>Trang chủ</h1>
            <button className="btn btn-success me-2" onClick={bai1}>Bài 1</button>
            <button className="btn btn-danger" onClick={bai2}>Bài 2</button>
        </div>
    );
}

export default Home;
