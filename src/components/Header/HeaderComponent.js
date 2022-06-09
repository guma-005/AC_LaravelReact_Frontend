import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./HeaderComponent.css";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    //clear localStorage and redirect to login page
    navigate("/login");
  };
  return (
    <div className="header">
      <div className="content">
        <h1>Student Grading System</h1>{" "}
      </div>
      <div>
        <b style={{ color: "white" }}> Welcome Teacher </b>{" "}
        <Button type="link" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
export default HeaderComponent;
