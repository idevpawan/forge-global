import { TApiCard } from "@/types";
import React from "react";

function ApiCard(props: TApiCard) {
  return (
    <div className="border rounded-lg p-5">
      <div className="flex items-center gap-4">
        <span className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary">
          {props.type}
        </span>
        <span className="text-sm font-mono">{props.route}</span>
      </div>
      <p className="font-semibold mt-1 tracking-tight text-xl">{props.name}</p>
      <p className="text-sm mt-1.5">{props.desc}</p>
      <p className="font-medium mt-4 mb-3">Query Parameters</p>
      {props.queryParameters.caplightId && (
        <div className="flex items-start gap-10 border-b pb-4">
          <p className="min-w-[120px] font-mono text-sm">caplightId</p>
          <div className="text-sm space-y-1.5">
            <p>{props.queryParameters.caplightId.type}</p>
            <p>{props.queryParameters.caplightId.idType}</p>
            <p>
              Example:{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">
                {props.queryParameters.caplightId.example}
              </code>
            </p>
          </div>
        </div>
      )}
      {props.queryParameters.pitchbookId && (
        <div className="flex items-start mt-4 gap-10 border-b pb-4">
          <p className="min-w-[120px] font-mono text-sm">pitchbookId</p>
          <div className="text-sm space-y-1.5">
            <p>{props.queryParameters.pitchbookId.type}</p>
            <p>{props.queryParameters.pitchbookId.idType}</p>
            <p>
              Example:{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">
                {props.queryParameters.pitchbookId.example}
              </code>
            </p>
          </div>
        </div>
      )}
      <p className="font-medium mt-6 mb-2">Response</p>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 text-xs font-medium rounded bg-green-500/10 text-green-600">
          200
        </span>
        <span className="text-sm text-muted-foreground">application/json</span>
      </div>
      <pre className="p-4 mt-3 rounded-lg bg-zinc-950 text-zinc-50 text-sm overflow-x-auto">
        <code>{props.response}</code>
      </pre>
    </div>
  );
}

export default ApiCard;
