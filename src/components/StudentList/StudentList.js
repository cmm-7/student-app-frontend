import StudentCard from "../StudentCard/StudentCard";

const StudentList = ({ studentData }) => {
  console.log("<StudentList/> rendered");
  return (
    <div className="StudentList">
      <StudentCard studentData={studentData} />
    </div>
  );
};

export default StudentList;
