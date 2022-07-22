import React from "react";
import { useSelector } from "react-redux/es/exports";
import secretFolderIcon from "./images/secret__Icon_folderImage.svg";
// import moment from "moment/moment.js";
import "./index.css";
import deleteSecretIcon from "./images/icon_delete_inactive.svg";
import { useDispatch } from "react-redux/es/exports";
import { deleteSecretItem } from "../../../../../redux/actions/index";

function SecretList() {
  const activeSafeData = useSelector((state) => state.activeSafe);
  const safesData = useSelector((state) => state.safeList);

  // const [cardBgColor, setCardBgColor] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  // const objectLength = Object.keys(activeSafeData).length;
  // console.log(objectLength);

  const handleClick = (e) => {
    e.target.style.backgroundColor = "blue";
    // setIsActive(true);
  };

  const deleteSecretCard = (cardId) => {
    // console.log("cardId is ", cardId);
    const activeSecretDelete = { ...activeSafeData };
    const deletedActive = activeSecretDelete.secrets.filter(
      (item) => item.id !== cardId
    );

    // let secretArray = [...activeSecretDelete.secrets]; //secrets:
    // secretArray.push(secretValue);
    // safes.secrets = secretArray;

    activeSecretDelete.secrets = deletedActive;
    console.log(activeSecretDelete);

    dispatch(deleteSecretItem(activeSecretDelete));
  };

  return (
    <div className="secret__Cards">
      {safesData.length > 0
        ? activeSafeData.secrets.map((card, i) => (
            <div className="secret__cards-data">
              <div
                className="secretList__data"
                onClick={
                  activeSafeData.secrets.id === card.id
                    ? (e) => handleClick()
                    : ""
                }
                key={card.id}
              >
                <div className="secretList__text">
                  <img
                    className="secretFolderIcon"
                    src={secretFolderIcon}
                    alt="folderIcon"
                  />
                </div>
                <div className="secretList__text">
                  <h4 className="card__Name">{card.secretName}</h4>
                  <h5 className="new-Text">New</h5>
                </div>
              </div>
              <div
                className="deleteIcon"
                onClick={() => deleteSecretCard(card.id)}
              >
                <img src={deleteSecretIcon} alt="deleteIcon" />
              </div>
            </div>
          ))
        : ""}
      {/* <p>{moment().startOf("day").fromNow()}</p> */}
    </div>
  );
}

export default SecretList;
