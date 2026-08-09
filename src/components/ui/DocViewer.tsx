import React from 'react';
import { X, FileText, Download, Shield, Terminal, BookOpen, Database, Zap } from 'lucide-react';

interface DocViewerProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    client: string;
    situation: string;
    transformation: string;
    tech: string[];
  } | null;
}

export const DocViewer: React.FC<DocViewerProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-bg-dark/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0B0F19] border border-border-custom rounded-2xl shadow-2xl overflow-hidden z-10 animate-forge">
        {/* Glow styling */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-custom bg-bg-dark/80 relative z-10">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-primary" />
            <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold">Document Artifact Workspace</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-surface border border-transparent hover:border-border-custom transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Panel */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto relative z-10 text-left">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 pb-6 border-b border-border-custom/40">
            <div>
              <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest block mb-1">{project.client}</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary leading-tight">{project.title}</h3>
            </div>
            <a
              href={`https://docs.google.com/document/d/1O5gE_g4_AFrqI2yD8f6H6f6hE_k_fW6H/edit`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/40 hover:border-brand-primary text-xs font-mono text-text-primary flex items-center gap-1.5 self-stretch sm:self-auto text-center justify-center transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-accent-gold" />
              <span>Open in Google Drive</span>
            </a>
          </div>

          {/* Interactive Document Body Sheet */}
          <div className="bg-bg-dark border border-border-custom/60 rounded-2xl p-6 sm:p-8 font-mono text-[11px] sm:text-xs text-text-secondary leading-relaxed shadow-inner max-h-[50vh] overflow-y-auto">
            {project.id === 'driverigt' && (
              <div className="flex flex-col gap-6 font-display">
                <div className="border-b border-border-custom/30 pb-4">
                  <h1 className="text-lg font-bold text-text-primary uppercase tracking-wider font-mono mb-2">[PRD] DriveRigt Fleet Engine Architecture</h1>
                  <span className="text-[10px] text-accent-gold font-mono uppercase tracking-widest">[Status: Ready for Engineering | Version: 1.4.2]</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-primary" />
                    1. Functional Overview & User Flow
                  </h2>
                  <p className="pl-6 font-sans text-xs text-text-secondary">
                    DriveRigt facilitates a modular booking pipeline with direct Stripe integrations, instant SMS telemetry, and responsive inventory updates.
                    The checkout converts multi-step dropoff points into an integrated single-page checkout sequence.
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2 font-mono">
                    <Database className="w-4 h-4 text-brand-secondary" />
                    2. Schema Design & Data Dictionary
                  </h2>
                  <pre className="p-4 rounded-lg bg-bg-surface border border-border-custom/80 text-[10px] font-mono text-green-400 overflow-x-auto leading-relaxed">
{`CREATE TABLE tbl_users (
  UserID VARCHAR(64) PRIMARY KEY,
  Email VARCHAR(128) UNIQUE NOT NULL,
  PasswordHash VARCHAR(256) NOT NULL,
  ComplianceApproved BOOLEAN DEFAULT FALSE,
  CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tbl_fleets (
  VehicleID VARCHAR(64) PRIMARY KEY,
  ModelName VARCHAR(128) NOT NULL,
  Latitude DECIMAL(9, 6) NOT NULL,
  Longitude DECIMAL(9, 6) NOT NULL,
  DailyRate DECIMAL(10, 2) NOT NULL,
  Status VARCHAR(32) DEFAULT 'AVAILABLE'
);

CREATE TABLE tbl_bookings (
  BookingID VARCHAR(64) PRIMARY KEY,
  UserID VARCHAR(64) FOREIGN KEY REFERENCES tbl_users(UserID),
  VehicleID VARCHAR(64) FOREIGN KEY REFERENCES tbl_fleets(VehicleID),
  CheckInDate TIMESTAMP NOT NULL,
  CheckoutDate TIMESTAMP NOT NULL,
  TotalCharged DECIMAL(10, 2) NOT NULL,
  Status VARCHAR(32) DEFAULT 'PENDING'
);`}
                  </pre>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-accent-gold" />
                    3. Performance SLA Goals
                  </h2>
                  <ul className="list-disc pl-10 font-sans text-xs text-text-secondary flex flex-col gap-1.5">
                    <li>Database Query Response Limit: <strong className="text-text-primary font-semibold">&lt; 85ms</strong> on Snowflake direct mappings.</li>
                    <li>API Endpoint Availability: <strong className="text-text-primary font-semibold">99.99%</strong> deployment through AWS API Gateway.</li>
                    <li>Page Load Speed: <strong className="text-text-primary font-semibold">&lt; 1.2s</strong> fully-hydrated via Next.js Edge Caching.</li>
                  </ul>
                </div>
              </div>
            )}

            {project.id === 'whatsapp-scheduler' && (
              <div className="flex flex-col gap-6 font-display">
                <div className="border-b border-border-custom/30 pb-4">
                  <h1 className="text-lg font-bold text-text-primary uppercase tracking-wider font-mono mb-2">[TEARDOWN] WhatsApp Custom Scheduler Engine</h1>
                  <span className="text-[10px] text-accent-gold font-mono uppercase tracking-widest">[Status: Production Verified | Version: 2.1.0]</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent-gold" />
                    1. Scheduling Mechanics Teardown
                  </h2>
                  <p className="pl-6 font-sans text-xs text-text-secondary">
                    Bypasses manual delays. Uses scalable serverless execution. A multi-node scheduler maps upcoming dispatch times to cron buckets, triggering worker processes every weekday at 09:00 UTC.
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2 font-mono">
                    <Terminal className="w-4 h-4 text-brand-primary" />
                    2. Python Handler Middleware Blueprint
                  </h2>
                  <pre className="p-4 rounded-lg bg-bg-surface border border-border-custom/80 text-[10px] font-mono text-green-400 overflow-x-auto leading-relaxed">
{`import os
import requests
import pymysql

def handler(event, context):
    db_conn = pymysql.connect(
        host=os.environ['DB_HOST'],
        user=os.environ['DB_USER'],
        password=os.environ['DB_PASS'],
        db=os.environ['DB_NAME']
    )

    with db_conn.cursor() as cursor:
        # Fetch pending queues ready for execution
        cursor.execute("SELECT QueueID, UserPhone, Payload FROM tbl_whatsapp_queue WHERE DispatchStatus='PENDING' AND ScheduledTime <= NOW()")
        rows = cursor.fetchall()

        for row in rows:
            qid, phone, msg_payload = row
            headers = {
                "Authorization": f"Bearer {os.environ['WHATSAPP_TOKEN']}",
                "Content-Type": "application/json"
            }
            # Trigger outbound API endpoint
            res = requests.post("https://graph.facebook.com/v17.0/me/messages", json=msg_payload, headers=headers)
            if res.status_code == 200:
                cursor.execute("UPDATE tbl_whatsapp_queue SET DispatchStatus='COMPLETED' WHERE QueueID=%s", (qid,))
            else:
                cursor.execute("UPDATE tbl_whatsapp_queue SET DispatchStatus='FAILED', ErrorLog=%s WHERE QueueID=%s", (res.text, qid))

    db_conn.commit()
    db_conn.close()`}
                  </pre>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2">
                    <Shield className="w-4 h-4 text-brand-secondary" />
                    3. Failure Policy & Backoff
                  </h2>
                  <p className="pl-6 font-sans text-xs text-text-secondary">
                    Any webhook failure (non-200 callback status) triggers an exponential backoff retry scheme: Retries after 5m, 15m, 1h, and 4h, after which the message transitions to FAILED state and escalates to the admin diagnostic alert board.
                  </p>
                </div>
              </div>
            )}

            {project.id === 'cohort-analytics' && (
              <div className="flex flex-col gap-6 font-display">
                <div className="border-b border-border-custom/30 pb-4">
                  <h1 className="text-lg font-bold text-text-primary uppercase tracking-wider font-mono mb-2">[SCHEMA] Student Cohort Analytics BI Model</h1>
                  <span className="text-[10px] text-accent-gold font-mono uppercase tracking-widest">[Status: Deployed & Audited | Version: 3.0.1]</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2">
                    <Database className="w-4 h-4 text-brand-primary" />
                    1. Data Warehouse Dimensional Modeling
                  </h2>
                  <p className="pl-6 font-sans text-xs text-text-secondary">
                    Fragmented unstructured evaluation logs and grade listings are normalized directly into a high-performance Star-Schema.
                    This guarantees direct queries filter datasets in sub-second timelines.
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2 font-mono">
                    <Database className="w-4 h-4 text-brand-secondary" />
                    2. SQL Aggregation Logic
                  </h2>
                  <pre className="p-4 rounded-lg bg-bg-surface border border-border-custom/80 text-[10px] font-mono text-green-400 overflow-x-auto leading-relaxed">
{`CREATE VIEW vw_cohort_peer_evaluations AS
SELECT
    f.StudentCohortKey,
    s.StudentID,
    s.FullName AS StudentName,
    AVG(f.PeerEvaluationScore) AS AveragePeerScore,
    SUM(f.MilestonesCompleted) AS TotalMilestones,
    CASE
        WHEN AVG(f.PeerEvaluationScore) >= 4.5 THEN 'EXCELLENT'
        WHEN AVG(f.PeerEvaluationScore) >= 3.5 THEN 'SATISFACTORY'
        ELSE 'INTERVENTION REQUIRED'
    END AS PerformanceStatus
FROM tbl_fact_student_grades f
JOIN tbl_dim_students s ON f.StudentKey = s.StudentKey
GROUP BY f.StudentCohortKey, s.StudentID, s.FullName;`}
                  </pre>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h2 className="text-sm font-bold text-text-primary tracking-wide flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-accent-gold" />
                    3. Tableau / Power BI Mapping Details
                  </h2>
                  <ul className="list-disc pl-10 font-sans text-xs text-text-secondary flex flex-col gap-1.5">
                    <li>Dynamic Star-Schema direct query linkage over MySQL engine limits.</li>
                    <li>Visual conditional heatmaps rendering standard peer score distribution offsets.</li>
                    <li>Aggregated grading progress dashboards tracking complete milestone submissions.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#080B13] border-t border-border-custom px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent-gold" />
            <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Confidential Document Pipeline</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-bg-surface hover:bg-bg-surface/80 border border-border-custom text-xs font-mono text-text-primary transition-all cursor-pointer"
          >
            Exit Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
