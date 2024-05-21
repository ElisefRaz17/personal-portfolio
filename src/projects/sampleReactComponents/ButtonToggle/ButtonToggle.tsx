import React from "react";
import ButtonToggleProvider, {
  useButtonToggleContext,
} from "./ButtonToggleContext.tsx";
import "./ButtonToggle.css";

type ButtonToggleTitlesProps = {
  items: {
    id: string;
    title: string;
  }[];
};

type ButtonToggleContentProps = {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
};

type ButtonToggleComposition = {
  Titles: (props: ButtonToggleTitlesProps) => React.ReactNode;
  Contents: (props: ButtonToggleContentProps) => React.ReactNode;
};

type ButtonToggleProps = {
  children: React.ReactNode;
};

type ButtonToggleWrapper = (props: ButtonToggleProps) => React.ReactNode;

const ButtonToggle: ButtonToggleWrapper & ButtonToggleComposition = ({
  children,
}) => {
  return <ButtonToggleProvider>{children}</ButtonToggleProvider>;
};

ButtonToggle.Contents = ({ items }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentIndex } = useButtonToggleContext();
  const { id, content } = items[currentIndex];
  return (
    <div>
      <div
        key={id}
        id={`buttontoggle-content-${id}`}
        role="buttontoggle"
        aria-labelledby={`buttontoggle-control-${id}`}
      >
        {content}
      </div>
    </div>
  );
};

ButtonToggle.Titles = ({ items }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentIndex, setCurrentIndex } = useButtonToggleContext();
  return (
    <div role="button-toggle" id="button-toggle">
      {items.map(({ id, title }, index) => (
        <button
          key={id}
          id={`buttontoggle-control-${id}`}
          role="buttontoggle"
          aria-controls={`buttongroup-content-${id}`}
          aria-selected={currentIndex === index}
          onClick={() => {
            setCurrentIndex(index);
          }}
          className="button-toggle-item"
        >
          {title}
        </button>
      ))}
    </div>
  );

  ButtonToggle.Contents = ({ items }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { currentIndex } = useButtonToggleContext();
    const { id, content } = items[currentIndex];
    return (
      <div>
        {items.map(({ id, content }) => (
          <div
            key={id}
            id={`buttontoggle-content-${id}`}
            role="buttontoggle"
            aria-labelledby={`buttontoggle-control-${id}`}
          >
            {content}
          </div>
        ))}
      </div>
    );
  };
};

export default ButtonToggle;
