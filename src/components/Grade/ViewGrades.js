import { useState } from "react";
import { useEffect } from "react";
import { Button, Space, Table } from "antd";

//import data from "./data.json";
import EditGrade from "./EditGrade";
import DeleteGrade from "./DeleteGrade";
import AddGrade from "./AddGrade";
import { getAllGrades } from "../../api/Auth";

import get from "lodash/get";
import "./grade.css";

const ViewGrades = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [modaldata, setModalData] = useState([]);
  const [studenGrades, setStudentGrades] = useState([]);

  useEffect(() => {
    console.log("use effect called");
    getGrades();
  }, [isDeleteModalVisible, isAddModalVisible, isEditModalVisible]);

  const getGrades = async () => {
    const response = await getAllGrades();
    //console.log(" Response greades ", response);
    const studMarks = get(response, "data", []);
    //console.log(" Response studMarks ", studMarks);
    setStudentGrades(studMarks);
  };

  const showAddGradeModal = () => {
    setIsAddModalVisible(true);
  };
  const showDeleteModal = (record) => {
    setModalData(record);
    setIsDeleteModalVisible(true);
  };
  const showEditModal = (record) => {
    setModalData(record);
    setIsEditModalVisible(true);
  };
  const handleEditOk = () => {
    setIsEditModalVisible(false);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };
  const handleCloseAddModal = () => {
    setIsAddModalVisible(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };
  const onFinishEdit = (values) => {
    console.log("Edit submit", values);
  };

  const onFinishFailedEdit = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const columns1 = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Maths",
      dataIndex: "maths",
      key: "maths",
    },
    {
      title: "Science",
      dataIndex: "science",
      key: "science",
    },
    {
      title: "English",
      dataIndex: "english",
      key: "english",
    },
    {
      title: "Dutch",
      dataIndex: "dutch",
      key: "dutch",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (index, record) => (
        <Space>
          <Button type="primary" onClick={() => showEditModal(record)}>
            Edit
          </Button>
          <Button type="primary" onClick={() => showDeleteModal(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div className="mt-30">
      <div className="add-grades-btn">
        {" "}
        <Button onClick={showAddGradeModal}> Add Grades </Button>
      </div>
      <Table
        dataSource={studenGrades}
        columns={columns1}
        scroll={{}}
        pagination={false}
      />
      <EditGrade
        modaldata={modaldata}
        isModalVisible={isEditModalVisible}
        handleCloseEditModal={handleCloseEditModal}
        handleCancel={handleEditCancel}
        handleOk={handleEditOk}
        onFinish={onFinishEdit}
        onFinishFailed={onFinishFailedEdit}
      />

      <DeleteGrade
        modaldata={modaldata}
        isModalVisible={isDeleteModalVisible}
        // handleCancel={handleDeleteCancel}
        // handleOk={handleDeleteOk}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />
      <AddGrade
        isModalVisible={isAddModalVisible}
        handleCloseAddModal={handleCloseAddModal}
        // handleCancel={handleAddCancel} handleOk={handleAddOk}
        //   onFinish={onFinishAdd}
        //   onFinishFailed={onFinishFailedAdd}
      />
    </div>
  );
};

export default ViewGrades;
