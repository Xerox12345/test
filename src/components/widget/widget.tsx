import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Resizable } from "react-resizable";
import { OnResize, WidgetComponentProps } from "./widget.types";


export const WidgetComponent = ({ title, children }: WidgetComponentProps) => {
  const ref = useRef(null);
  const [maxConstraints, setMaxConstraints] = useState([]);
  const [resize, setResize] = useState({
    width: "100%",
    height: "auto",
  });

  const onResize = (
    event: SyntheticEvent<Element, Event>,
    { node, size, handle }: OnResize
  ) => {
    console.log(event, node, handle);
    setResize({ width: size.width, height: size.height });
  };

  useEffect(() => {
    if (ref?.current) {
      const { clientWidth, clientHeight } = ref.current;
      setResize({
        width: clientWidth,
        height: clientHeight,
      });
      setMaxConstraints([clientWidth, clientHeight]);
    }
  }, [ref]);

  return (
    <Resizable
      height={resize.height}
      width={resize.width}
      onResize={onResize}
      minConstraints={[300, 300]}
      maxConstraints={maxConstraints}
    >
      <div
        ref={ref}
        style={{
          width: resize.width + "px",
          height: resize.height + "px",
          transition: " width 0.5s",
        }}
        className="w-full h-96 bg-white rounded-lg"
      >
        <div className="border-b-0">
          <h2 className="px-4 text-2xl p-2 font-medium">{title}</h2>
        </div>
        <div className="min-h-50 p-3">{children}</div>
      </div>
    </Resizable>
  );
};
