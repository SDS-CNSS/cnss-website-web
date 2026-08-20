"use client";

import { useRef, useState, type DragEvent } from "react";
import { UploadCloud, FileText, X } from "lucide-react";

const MAX_FILES = 3;
const MAX_SIZE_MB = 10;

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

type FileUploadFieldProps = {
  id: string;
  files: File[];
  onChange: (files: File[]) => void;
};

export function FileUploadField({ id, files, onChange }: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function addFiles(newFiles: FileList | File[]) {
    const incoming = Array.from(newFiles);

    const tooLarge = incoming.find((file) => file.size > MAX_SIZE_MB * 1024 * 1024);
    if (tooLarge) {
      setError(`« ${tooLarge.name} » dépasse ${MAX_SIZE_MB} Mo.`);
      return;
    }

    if (files.length + incoming.length > MAX_FILES) {
      setError(`${MAX_FILES} fichiers maximum.`);
    } else {
      setError(null);
    }

    onChange([...files, ...incoming].slice(0, MAX_FILES));
  }

  function removeFile(index: number) {
    setError(null);
    onChange(files.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(event: DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event: DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          setIsDragging(false);
          if (event.dataTransfer.files.length > 0) addFiles(event.dataTransfer.files);
        }}
        className={`flex cursor-pointer flex-col items-center gap-2 rounded-md border-2 border-dashed px-4 py-6 text-center transition-colors ${
          isDragging
            ? "border-primary bg-primary-100"
            : "border-line bg-surface hover:border-primary-200 hover:bg-surface-light-2"
        }`}
      >
        <UploadCloud className="size-6 text-muted" />
        <p className="text-sm font-medium text-ink">
          Glissez vos fichiers ici ou <span className="text-primary underline">parcourir</span>
        </p>
        <p className="text-xs text-muted">
          PDF ou image — {MAX_SIZE_MB} Mo max par fichier, {MAX_FILES} fichiers max
        </p>
        <input
          ref={inputRef}
          id={id}
          type="file"
          multiple
          accept="application/pdf,image/*"
          className="hidden"
          onChange={(event) => {
            if (event.target.files && event.target.files.length > 0) addFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </div>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 rounded-md border border-line bg-surface px-3 py-2"
            >
              <FileText className="size-4 shrink-0 text-muted" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{file.name}</p>
                <p className="text-xs text-muted">{formatFileSize(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                aria-label={`Retirer ${file.name}`}
                className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-light-2 hover:text-ink"
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
