const StudentCard = ({ studentData }) => {
  return (
    <div className="StudentCard">
      {studentData.map((student) => {
        const { email, company, firstName, lastName, pic, grades, id, skill } =
          student;
        let average =
          grades.reduce((acc, curr) => {
            return acc + Number(curr);
          }, 0) / grades.length;
        console.log(`<StudentCard/> rendered name=${firstName}`);
        return (
          <div key={id}>
            <img src={pic} alt={`${firstName} ${lastName}`} />
            <h1>
              {firstName} {lastName}
            </h1>
            <ul>
              <li>Email: {email}</li>
              <li>Company: {company}</li>
              <li>Skill: {skill}</li>
              <li>Average: {average}%</li>
            </ul>
          </div>
        );
      })}
      ;
    </div>
  );
};
export default StudentCard;
