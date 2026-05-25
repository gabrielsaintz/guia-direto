import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeedbackButton() {
  const url = process.env.NEXT_PUBLIC_FEEDBACK_FORM_URL;

  if (!url || url.includes("sua-url-aqui")) return null;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="sm" className="gap-2">
        <ThumbsUp className="size-4" />
        Isso foi útil?
      </Button>
    </a>
  );
}
