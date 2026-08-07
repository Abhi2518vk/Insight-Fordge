import React, { useState } from 'react';
import { Play, Settings, Cpu, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkflowDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "[SYSTEM] AI Workflow Pipeline listening on webhook endpoint https://api.insightforge.site/v1/trigger...",
  ]);

  const steps = [
    {
      id: 1,
      title: "API Webhook",
      desc: "Receive lead data from HubSpot or Stripe webhook trigger.",
      icon: <Terminal className="w-4 h-4 text-indigo-bright" />,
      schema: { event: "payment.completed", customer: "Acme Corp", amount: "$14,500" }
    },
    {
      id: 2,
      title: "AI Enrichment",
      desc: "LLM parses customer segment, categorizes intent & predicts LTV.",
      icon: <Cpu className="w-4 h-4 text-brass" />,
      schema: { classification: "Enterprise", predicted_ltv: "$85k", confidence: "98.4%" }
    },
    {
      id: 3,
      title: "Database Sync",
      desc: "Dynamically partition & index records inside PostgreSQL cluster.",
      icon: <Settings className="w-4 h-4 text-emerald-400" />,
      schema: { query: "INSERT INTO enterprise_accounts", status: "COMMITTED" }
    },
    {
      id: 4,
      title: "Auto Notification",
      desc: "Alert engineering & account leads with custom Slack payloads.",
      icon: <CheckCircle2 className="w-4 h-4 text-teal-400" />,
      schema: { channel: "#ops-delivery-alerts", message: "Acme Account Configured" }
    }
  ];

  const handleRunPipeline = () => {
    if (running) return;
    setRunning(true);
    setActiveStep(1);

    // Step 1 Triggered
    setConsoleLogs(prev => [
      ...prev,
      `[TRIGGER] Received webhook payload from Stripe: payment.completed (Customer: Acme Corp)`,
    ]);

    // Step 2 AI Enrichment
    setTimeout(() => {
      setActiveStep(2);
      setConsoleLogs(prev => [
        ...prev,
        `[AI MODEL] Querying Llama-3 parsing engine... Classified: "Enterprise Segment" | Confidence: 98.4%`,
      ]);
    }, 1500);

    // Step 3 DB Update
    setTimeout(() => {
      setActiveStep(3);
      setConsoleLogs(prev => [
        ...prev,
        `[DATABASE] Writing transactional partition key 'ACME_PART_01' into AWS PostgreSQL Instance`,
      ]);
    }, 3000);

    // Step 4 Complete
    setTimeout(() => {
      setActiveStep(4);
      setConsoleLogs(prev => [
        ...prev,
        `[DISPATCH] Sent high-priority Slack webhook alert to #ops-delivery-alerts. Pipeline finalized in 380ms.`,
        `[SYSTEM] Execution SUCCESS. Standby for next event hook...`
      ]);
      setRunning(false);
    }, 4500);
  };

  const handleClearLogs = () => {
    setConsoleLogs([
      "[SYSTEM] AI Workflow Pipeline listening on webhook endpoint https://api.insightforge.site/v1/trigger...",
    ]);
    setActiveStep(0);
  };

  return (
    <div className="bg-obsidian-surface border border-obsidian-border rounded-lg p-6 relative overflow-hidden">
      {/* Node Graph Header */}
      <div className="flex justify-between items-center mb-6 border-b border-obsidian-border pb-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-bright">Operational Node-Graph Simulator</span>
          </div>
          <h4 className="text-lg font-semibold text-white">AI Automation Flow Visualizer</h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunPipeline}
            disabled={running}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-semibold transition-all duration-200
              ${running
                ? 'bg-indigo/30 text-indigo-bright border border-indigo/20 cursor-not-allowed'
                : 'bg-indigo hover:bg-indigo-hover text-white border border-transparent shadow-[0_0_15px_rgba(79,70,229,0.35)]'}
            `}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {running ? "Executing Node..." : "Test AI Pipeline"}
          </button>

          <button
            onClick={handleClearLogs}
            className="px-2.5 py-1.5 rounded bg-obsidian-card border border-obsidian-border hover:border-gray-700 text-xs font-mono text-gray-400 hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Nodes Array representation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 relative">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const isPassed = activeStep > step.id;

          return (
            <React.Fragment key={step.id}>
              <div
                className={`
                  relative p-4 rounded border transition-all duration-300 bg-obsidian-card/50
                  ${isActive
                    ? 'border-indigo shadow-[0_0_20px_rgba(79,70,229,0.2)] bg-obsidian'
                    : isPassed
                    ? 'border-emerald-500/50 bg-obsidian-surface'
                    : 'border-obsidian-border'}
                `}
              >
                {/* Node Active State Badge */}
                {isActive && (
                  <span className="absolute -top-2 -right-2 bg-indigo text-[9px] font-mono font-bold text-white px-1.5 py-0.5 rounded animate-bounce">
                    RUNNING
                  </span>
                )}
                {isPassed && (
                  <span className="absolute -top-2 -right-2 bg-emerald-500 text-[9px] font-mono font-bold text-white px-1.5 py-0.5 rounded">
                    DONE
                  </span>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded ${isActive ? 'bg-indigo/20' : 'bg-obsidian-surface'}`}>
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-400">Step 0{step.id}</span>
                </div>

                <h5 className="text-sm font-semibold text-white mb-1">{step.title}</h5>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>

                {/* Embedded dynamic node schema preview */}
                <div className="mt-3 p-2 bg-obsidian rounded font-mono text-[10px] text-gray-500 border border-obsidian-border overflow-x-auto">
                  <span className="text-indigo-bright">params:</span> {JSON.stringify(step.schema, null, 1)}
                </div>
              </div>

              {/* Connector Chevron arrow between elements */}
              {index < 3 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 text-obsidian-muted z-10" style={{ left: `calc(${(index + 1) * 25}% - 8px)` }}>
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Embedded Terminal Output logs console */}
      <div className="bg-obsidian border border-obsidian-border rounded p-4 font-mono text-xs relative">
        <div className="absolute top-2 right-4 text-[9px] text-gray-600 uppercase tracking-widest font-semibold">Console Output</div>
        <div className="flex items-center gap-1.5 mb-2 border-b border-obsidian-border/50 pb-1 text-gray-500 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-red-500/50" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <span className="w-2 h-2 rounded-full bg-green-500/50" />
          <span className="ml-2">secure_process_host_v2.bin</span>
        </div>

        <div className="space-y-1.5 max-h-36 overflow-y-auto text-gray-300">
          {consoleLogs.map((log, i) => {
            const isSystem = log.startsWith("[SYSTEM]");
            const isTrigger = log.startsWith("[TRIGGER]");
            const isAI = log.startsWith("[AI");
            const isDatabase = log.startsWith("[DATABASE]");
            const isDispatch = log.startsWith("[DISPATCH]");

            let logColor = "text-gray-400";
            if (isSystem) logColor = "text-gray-500";
            else if (isTrigger) logColor = "text-indigo-bright";
            else if (isAI) logColor = "text-brass";
            else if (isDatabase) logColor = "text-emerald-400";
            else if (isDispatch) logColor = "text-teal-400";

            return (
              <div key={i} className={`text-[11px] leading-relaxed ${logColor}`}>
                {log}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
