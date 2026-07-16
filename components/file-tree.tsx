import { cn } from "@/lib/utils";
import { File, Folder, FolderOpen } from "lucide-react";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}

interface FileTreeProps {
  files: FileNode[];
  className?: string;
}

function FileNode({ node, level = 0 }: { node: FileNode; level?: number }) {
  const Icon = node.type === "folder" ? Folder : File;
  const paddingLeft = level * 16;

  return (
    <div>
      <div className="flex items-center gap-2 py-1" style={{ paddingLeft }}>
        <Icon className="h-4 w-4 text-foreground-secondary" />
        <span className="text-sm text-foreground-secondary">{node.name}</span>
      </div>
      {node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ files, className }: FileTreeProps) {
  return (
    <div className={cn("my-6 p-4 rounded-lg border border-zinc-900 bg-zinc-950/30", className)}>
      {files.map((file, index) => (
        <FileNode key={index} node={file} />
      ))}
    </div>
  );
}
