import ButtonToggle from "./ButtonToggle/ButtonToggle.tsx";
import Tabs from "./Tabs/Tabs.tsx";
import Chips from "./Chips/Chips.tsx";
import SearchFeature from "./SearchFeature/SearchFeature.tsx";
import "./sampleReactComponents.css";
export const SampleReactComponents = () => {
  const tabData = [
    { id: "tab1_unique_id", title: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2_unique_id", title: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3_unique_id", title: "Tab 3", content: "Content for Tab 3" },
  ];
  const buttonData = [
    { id: "button1_unique_id", title: "Button 1" },
    { id: "button2_unique_id", title: "Button 2" },
    { id: "button3_unique_id", title: "Button 3" },
  ];
  const chipsData = [
    "Chip 1",
    (onDelete) => console.log("Chip 1 deleted"),
    (size) => "small",
    (clickable) => true,
    "Chip 2",
    (onDelete) => console.log("Chip 2 deleted"),
    (size) => "medium",
    (clickable) => true,
    "Chip 3",
    (onDelete) => console.log("Chip 3 deleted"),
    (size) => "medium",
    (clickable) => false,
  ];
  return (
    <div
      id="samplereactcomponents"
      style={{
        gap: "0.4rem",
        display: "flex",
        flexFlow: "column",
        width: "100%",
      }}
    >
      <h1>Sample React TypeScript Components</h1>
      <p style={{ overflowWrap: "break-word", paddingLeft: 0}}>
        {" "}
        All of these components include the following technologies to develop
        them: React, Typescript, Tailwind CSS and Javascript. Each of these
        components are mockups of components that I have created in my current
        role as a Technical Associate. But you can see a screenshot of some
        components in my company's development environment.
      </p>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 col-span-full mx-auto">
        <div>
          <h2 id="samplecomponents">Tabs</h2>
          <Tabs>
            <Tabs.Titles
              items={tabData.map(({ id, title }) => ({ id, title }))}
            />
            <Tabs.Contents
              items={tabData.map(({ id, content }) => ({
                id,
                content: <p>{content}</p>,
              }))}
            />
          </Tabs>
        </div>
        <div>
          <h2 id="samplecomponents">Button Toggle</h2>
          <ButtonToggle>
            <ButtonToggle.Titles
              items={buttonData.map(({ id, title }) => ({ id, title }))}
            />
            <ButtonToggle.Contents
              items={buttonData.map(({ id, title }) => ({
                id,
                content: <p>{title}</p>,
              }))}
            />
          </ButtonToggle>
        </div>
        <div>
          <h2 id="samplecomponents">Chips</h2>
          <div
            style={{
              flexGrow: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "self-start",
              width: "100%",
              paddingLeft: "50px",
            }}
          >
            <Chips items={chipsData} />
          </div>
        </div>
        <div>
          <h2 id="samplecomponents">Search Manager Names Component</h2>
          <SearchFeature />
        </div>
      </div>
    </div>
  );
};
