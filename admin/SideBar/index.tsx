import { Router, useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import Icon from "admin/components/Icon";
import { Aside } from "./styles";
import { route } from "next/dist/next-server/server/router";

const paths = [
  {
    name: "Home",
    href: "/admin/home",
  },
  {
    name: "Courses",
    href: "/admin/courses",
  },
  {
    name: "Course",
    href: "/admin/course",
  },
  {
    name: "Add Course",
    href: "/admin/add-course",
  },
];

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Aside>
      <section id="logo">
        <img src="/images/logo-admin.svg" />
      </section>
      <ul>
        <li onClick={() => setOpen(isOpen => !isOpen)}>
          <span>
            <Icon name="dashbord" />
          </span>
          Basic.am
        </li>
        <ul
          style={{
            visibility: isOpen ? "visible" : "hidden",
            height: isOpen ? "auto" : "0",
          }}
        >
          {paths.map(({ name, href }, idx) => (
            <li key={idx} className={cn({ active: href === router.pathname })}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
        {/* <a href="#">
          <span>
            <Icon name="dashbord" />
          </span>
          Dashboard
        </a>
        <a href="#">
          <span>
            <Icon name="graduation-cap" />
          </span>
          Groups
        </a>
        <a href="#">
          <span></span>Schedules
        </a>
        <a href="#">
          <span></span>Planning
        </a>
        <a href="#">
          <span></span>Exams
        </a>
        <a href="#">
          <span></span>Finance
        </a>
        <a href="#" className="beforeActive">
          <span></span>Reports
        </a>
        <a href="#" className="active">
          <span></span>Settings
        </a>
        <a href="#">
          <span style={{ transform: "rotate(180deg)" }}></span>Log out
        </a> */}
      </ul>
      <p id="copyrights">© 2020 | Basic CRM</p>
    </Aside>
  );
};

export default SideBar;
