import { Fragment } from "react";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import { useViewport } from "../../../hooks/useViewport";

export default function LoadingWithEmptyContent() {
  const viewport = useViewport();
  const height = viewport.height;

  return (
    <div className="w-full" style={{ height: height }}>
      <Fragment>
        <motion.div
          className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black"
          initial={{ opacity: 0.0 }}
          animate={{
            opacity: 0.8,
          }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          className="fixed left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl shadow-sm"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e6787a", "#e6787a", "#e6787a", "#e6787a", "#e6787a"]}
          />
        </motion.div>
      </Fragment>
    </div>
  );
}
