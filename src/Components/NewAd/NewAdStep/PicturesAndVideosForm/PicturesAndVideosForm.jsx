import React, { useContext } from "react";
import {
  toggleIsSectionValid,
  toggleShowSection,
} from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";
import NewAdStepButtons from "../NewAdStepButtons/NewAdStepButtons";
import FileUploadBox from "./FileUploadBox/FileUploadBox";

export default function PicturesAndVideosForm() {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const FileUploadBoxContent = [];
  for (let i = 0; i < 9; i++) {
    FileUploadBoxContent.push(
      <FileUploadBox key={`image-${i}`}>
        <i className="fa-solid fa-plus"></i>
        העלאת תמונות
      </FileUploadBox>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    newAdDispatch(toggleShowSection(5));
    newAdDispatch(toggleShowSection(6));
    newAdDispatch(toggleIsSectionValid(5, true));
  };

  return (
    newAdState["section" + 5]?.isShown && (
      <form id="pictures-and-videos-form" onSubmit={handleSubmit}>
        <div className="padding-50px-horizontal flex-column">
          <span>ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?</span>
          <span>
            לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים
            הטובים ביותר של הנכס
          </span>

          <div className="flex-row margin-top-30px">
            <FileUploadBox>
              <i className="fa-solid fa-video"></i>
              העלאת סרטון
            </FileUploadBox>

            <div className="main-photo-upload-container">
              <span>תמונה ראשית</span>
              <FileUploadBox>
                <i className="fa-solid fa-plus"></i>
                העלאת תמונות
              </FileUploadBox>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="flex-row">{FileUploadBoxContent}</div>
          <NewAdStepButtons />
        </div>
      </form>
    )
  );
}
