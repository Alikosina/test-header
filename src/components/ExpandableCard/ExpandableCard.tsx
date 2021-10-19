import React, { FC, memo, useState } from "react";
import ArrowIcon from "./assets/arrow.svg";
import cn from "classnames";

import "./ExpandableCard.scss";

const ExpandableCard: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="expandable-card">
      <div
        onClick={handleHeaderClick}
        className={cn("expandable-card__header", {
          "expandable-card__header_expanded": isOpen,
        })}
      >
        <h2 className="expandable-card__header-title">Заголовок карточки</h2>
        <img
          className={cn("expandable-card__arrow", {
            "expandable-card__arrow_active": isOpen,
          })}
          src={ArrowIcon}
          alt="arrow"
        />
      </div>
      {isOpen && <div className="expandable-card__body">Тело карточки</div>}
    </header>
  );
};

export default memo(ExpandableCard);
