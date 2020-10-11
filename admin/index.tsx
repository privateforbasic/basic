import { useLang } from "hooks/useLang";
import SideBar from "./SideBar";
import { Application } from "./styles";

const AdminLayout = ({ children }) => {
  useLang("en");

  return (
    <Application>
      <SideBar />
      <main>
        <header>
          <div className="input-group" id="searchBox">
            <input
              type="text"
              className="form-control"
              id="searchInput"
              aria-label="Text input with dropdown button"
              //   onKeyup="myFunction()"
              placeholder="Search .."
            />
          </div>
          <span>Vahe Hasratyan</span>
        </header>
        {children}
      </main>
    </Application>
  );
};

export default AdminLayout;
