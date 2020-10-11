import { StyledSection, StyledCourse } from "./styles";
import { useState, SetStateAction, Dispatch } from "react";
import Link from "next/link";

const Filter = ({ data }) => {
  type filterType = "beginner" | "intermediate" | "pro" | "";
  const [ftr, setFtr]: [
    filterType,
    Dispatch<SetStateAction<filterType>>
  ] = useState("");

  const [isOpenMobile, setOpenMobile]: [
    Boolean,
    Dispatch<SetStateAction<Boolean>>
  ] = useState(false);

  const { filters, courses } = data;

  return (
    <StyledSection>
      <section className="container">
        <nav id="tabs">
          <ul id="desktop-nav">
            {filters.map(
              ({
                filter,
                title,
                id,
              }: {
                filter: filterType;
                title: string;
                id: string;
              }) => (
                <li key={id}>
                  <button
                    className="btn"
                    aria-current={filter === ftr}
                    onClick={() => setFtr(filter)}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </li>
              )
            )}
            <li aria-hidden="true"></li>
          </ul>
          <ul id="mobile-nav">
            <li>
              <button
                className="btn"
                aria-current={true}
                onClick={() => setOpenMobile(isOpen => !isOpen)}
                dangerouslySetInnerHTML={{
                  __html: filters.find(({ filter }) => filter === ftr).title,
                }}
              />
            </li>
            {isOpenMobile &&
              filters
                .filter(({ filter }) => filter !== ftr)
                .map(
                  ({
                    filter,
                    title,
                    id,
                  }: {
                    filter: filterType;
                    title: string;
                    id: string;
                  }) => (
                    <li key={id}>
                      <button
                        className="btn"
                        onClick={() => {
                          setFtr(filter);
                          setOpenMobile(isOpen => !isOpen);
                        }}
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                    </li>
                  )
                )}
            <li aria-hidden="true"></li>
          </ul>
        </nav>
        <section id="courses">
          {courses
            .filter(({ filter }) => ~filter.indexOf(ftr))
            .map(
              ({
                id,
                name,
                href,
                filter,
                gradient,
                description,
                image: { src, alt },
              }) => (
                <Link
                  href={`/courses/[course]`}
                  as={`/courses/${href}`}
                  key={id}
                >
                  <StyledCourse as="a" gradient={gradient}>
                    {filter === "pro" && <span className="pro">PRO</span>}
                    <figure>
                      <img src={`/images/courses/logos/${src}`} alt={alt} />
                    </figure>
                    <h2>{name}</h2>
                    <p>{description}</p>
                  </StyledCourse>
                </Link>
              )
            )}
        </section>
      </section>
    </StyledSection>
  );
};

export default Filter;
