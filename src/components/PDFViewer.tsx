import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfPath: string;
  title?: string;
}

export function PDFViewer({ open, onOpenChange, pdfPath, title }: PDFViewerProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop() || "document.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {title || "Document Viewer"}
            </DialogTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-full border-0"
            title={title || "PDF Viewer"}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

