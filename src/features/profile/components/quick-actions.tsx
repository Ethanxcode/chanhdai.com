import he from "he";
import { CircleUserIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function QuickActions({
  emailEncoded,
  vCardLink,
}: {
  emailEncoded: string;
  vCardLink: string;
}) {
  return (
    <>
      <div className="h-14" />

      <div className="fixed bottom-0 left-0 z-50 w-screen bg-background pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="screen-line-before">
          <div className="mx-auto px-4 md:max-w-3xl">
            <div className="border-x border-grid pt-2">
              <div className="screen-line-before screen-line-after -mx-px grid grid-cols-2 gap-4">
                <Button size="lg" asChild>
                  <a href={vCardLink} target="_blank" rel="noopener noreferrer">
                    <CircleUserIcon />
                    <span>Save vCard</span>
                  </a>
                </Button>

                <Button size="lg" asChild>
                  <a
                    href={`mailto:${he.decode(emailEncoded)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SendIcon />
                    <span>Send Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
