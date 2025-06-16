import { forwardRef } from "react";

export default forwardRef(function Input(props, ref) {
  const styles = {
    checkbox:
      "border rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm",
    default:
      "p-2 border w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
  };
  return (
    <input
      ref={ref}
      {...props}
      className={styles[props.type] ?? styles["default"]}
    />
  );
});
