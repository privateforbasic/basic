import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Container } from "./styles";
import ChangeCourse from "./ChangeCourse";
import { Loading } from "admin/components/atoms";

const GET_ALL_COURSES = gql`
  query GET_ALL_COURSES {
    courses {
      href
      name
    }
  }
`;

const AdminCourse = ({}) => {
  const { data } = useQuery(GET_ALL_COURSES);

  const [selectedCourse, setSelectedCourse]: [string, any] = useState("");

  if (!data) return <Loading />;

  return (
    <Container>
      {!selectedCourse && (
        <form className="first-step">
          <select
            defaultValue="default"
            onChange={({ target }) => setSelectedCourse(target.value)}
          >
            <option value="default" disabled hidden>
              Select course
            </option>
            {data.courses.map(({ href, name }, idx: number) => (
              <option key={idx} value={href}>
                {name}
              </option>
            ))}
          </select>
        </form>
      )}
      {selectedCourse && <ChangeCourse courseHref={selectedCourse} />}
    </Container>
  );
};

export default AdminCourse;
