import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/create-ads");
  }, 600);

  return (
    <div className="page-layout item-flex success-card">
      <div className="card">
        <CheckCircleIcon className="icon" />
        <h3 className="title">Submitted</h3>
      </div>
    </div>
  );
};

export default SuccessPage;
