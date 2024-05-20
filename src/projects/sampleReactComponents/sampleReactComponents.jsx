import Tabs from "./Tabs/Tabs.tsx";

export const SampleReactComponents = () => {
  const tabData = [
    { id: "tab1_unique_id", title: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2_unique_id", title: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3_unique_id", title: "Tab 3", content: "Content for Tab 3" },
  ];
  return (
    <div id="samplereactcomponents">
      <h1>Sample React TypeScript Components</h1>
      <h2>Tabs</h2>
      <Tabs>
        <Tabs.Titles items={tabData.map(({ id, title }) => ({ id, title }))} />
        <Tabs.Contents
          items={tabData.map(({ id, content }) => ({
            id,
            content: <p>{content}</p>,
          }))}
        />
      </Tabs>
    </div>
  );
};
