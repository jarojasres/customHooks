# useElementOnScreen

Example:
```
const CustomComponent = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  });

  return (
    <section className="customSection">
      <div className="isVisible">
        {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</div>
      </div>
      <div className="box" ref={containerRef}><img src="https://picsum.photos/200"</div>
    </section>
  );
};

export default CustomComponent;

```