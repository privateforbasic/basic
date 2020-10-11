import { Button, OldValue } from "admin/components/atoms";
import { useState, useEffect } from "react";
import { StyledFieldSet } from "../FieldSet/styles";
import cn from "classnames";

import { useMutation, useQuery } from "@apollo/client";

import * as M from "admin/graphql/mutations";
import * as Q from "admin/graphql/queries";

const FieldSetImage = ({
  title,
  value,
  actionType,
  dispatch,
  state,
  directoryPath,
}) => {
  const { data: courseIconsData, refetch } = useQuery(Q.ALL_FILES_IN_FOLDER, {
    variables: { directoryPath },
  });
  const [isOpen, setOpen] = useState(false);
  const newVal = state[actionType];

  const [uploadFile] = useMutation(M.UPLOAD_FILE);
  const [deleteFile] = useMutation(M.DELETE_FILE);

  useEffect(() => setOpen(false), [value]);

  if (!courseIconsData) return null;

  const path = `public${directoryPath}`;

  const handleUploadFile = e => {
    e.preventDefault();
    const {
      target: {
        validity,
        files: [file],
      },
    } = e;

    console.log(file);

    validity.valid &&
      uploadFile({ variables: { file, path } }).then(() => refetch());
  };

  const handleSetOpen = () => {
    if (!newVal) {
      setOpen(state => !state);
    }
  };

  return (
    <StyledFieldSet>
      <legend>{title}</legend>

      <OldValue
        value={value || "..."}
        newValue={newVal}
        onClick={handleSetOpen}
        image={{ path: directoryPath, name: value }}
      />

      {isOpen && (
        <>
          <div className="imgs">
            {courseIconsData.allFilesInFolder.map((imageName: string) => {
              const name = imageName.slice(0, -4);

              return (
                <div>
                  <img
                    alt={name}
                    key={name}
                    title={name}
                    src={`${directoryPath}${imageName}`}
                    className={cn({ active: newVal === imageName })}
                    onClick={() =>
                      dispatch({
                        type: actionType,
                        payload:
                          value === imageName
                            ? (setOpen(false), "")
                            : imageName,
                      })
                    }
                  />
                  <span
                    title="delete image"
                    onClick={() =>
                      confirm(`Արդյոք ուզում եք ջնջել ${imageName} նկարը`) &&
                      deleteFile({
                        variables: {
                          input: { path, fileName: imageName },
                        },
                      }).then(() => refetch())
                    }
                  >
                    +
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            <Button
              title="Reset"
              type="button"
              disabled={!newVal}
              onClick={() => {
                dispatch({ type: actionType, payload: "" });
                setOpen(false);
              }}
            />

            <Button
              type="button"
              disabled={false}
              variant="secondary"
              className="add_new"
              title="Add new Image"
            >
              <input
                type="file"
                accept="image/svg+xml"
                onChange={handleUploadFile}
              />
            </Button>

            {/* <Button
              title="Add Image"
              type="button"
              variant="secondary"
              disabled={false}
              onClick={() => {
                dispatch({ type: actionType, payload: "" });
              }}
            /> */}
          </div>
          <p>
            * Խնդրում ենք նկարը ընտրելուց համոզվեք, որ անունը գրված է
            լատինատառերով, բացատներ չի պարունակում, յուրաքանչյուր բառ
            առանձնանում է գծիկով, և համապատասխանում է առարկայի անվանմանը։
          </p>
        </>
      )}
    </StyledFieldSet>
  );
};

export default FieldSetImage;
