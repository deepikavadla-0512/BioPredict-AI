import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    if (onChange) {
      onChange(newFiles);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full h-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="h-full p-6 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden bg-white/50 dark:bg-[rgba(2,31,53,0.05)]"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] flex items-center justify-center">
          <GridPattern />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <p className="relative z-20 font-sans font-bold text-[rgba(2,31,53,1)] dark:text-gray-200 text-lg">
            Upload File
          </p>
          <p className="relative z-20 font-sans font-normal text-[rgba(2,31,53,0.8)] dark:text-gray-300 text-sm mt-2">
            Drag and drop your file here or click to browse
          </p>
          <div className="relative w-full mt-6 max-w-xl mx-auto">
            {files.length > 0 &&
              files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                  className={cn(
                    "relative overflow-hidden z-40 bg-white dark:bg-[rgba(2,31,53,0.3)] flex flex-col items-start justify-start md:h-20 p-4 mt-4 w-full mx-auto rounded-md",
                    "border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]"
                  )}
                >
                  <div className="flex justify-between w-full items-center gap-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="text-base text-[rgba(2,31,53,0.9)] dark:text-gray-200 truncate max-w-xs"
                    >
                      {file.name}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="rounded-md px-2 py-1 w-fit shrink-0 text-xs bg-[rgba(2,31,53,0.05)] text-[rgba(2,31,53,0.8)] dark:bg-[rgba(255,255,255,0.1)] dark:text-gray-300"
                    >
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            {!files.length && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-md z-40 bg-white dark:bg-[rgba(2,31,53,0.2)] flex items-center justify-center h-24 mt-4 w-full max-w-[6rem] mx-auto rounded-md",
                  "border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[rgba(2,31,53,0.8)] dark:text-gray-300 flex flex-col items-center text-sm"
                  >
                    Drop here
                    <IconUpload className="h-4 w-4 text-[rgba(2,31,53,0.6)] dark:text-gray-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="h-4 w-4 text-[rgba(2,31,53,0.6)] dark:text-gray-400" />
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-[rgba(2,31,53,0.3)] dark:border-[rgba(255,255,255,0.2)] inset-0 z-30 bg-transparent flex items-center justify-center h-24 mt-4 w-full max-w-[6rem] mx-auto rounded-md"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="absolute inset-0 flex bg-gray-100 dark:bg-neutral-900 shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
