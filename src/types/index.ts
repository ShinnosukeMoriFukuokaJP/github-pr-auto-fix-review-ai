// PR Context
export interface PRContext {
  repo: string;
  owner: string;
  prNumber: number;
  prTitle: string;
  prDescription: string;
  diff: string;
  files: string[];
  changedFiles: ChangedFile[];
  commitMessages: string[];
  ciLogs?: string;
  headSha: string;
  baseSha: string;
}

export interface ChangedFile {
  filename: string;
  status: 'added' | 'removed' | 'modified';
  additions: number;
  deletions: number;
  patch?: string;
}

// AI Analysis Response
export interface CodeIssue {
  type: 'bug' | 'security' | 'performance' | 'style';
  severity: 'low' | 'medium' | 'high';
  description: string;
  suggested_fix: string;
  affected_files: string[];
  line_numbers?: number[];
}

export interface AIAnalysisResult {
  issues: CodeIssue[];
  summary: string;
}

// Security Scan Result
export interface SecurityScanResult {
  hasSuspiciousPatterns: boolean;
  threats: SecurityThreat[];
}

export interface SecurityThreat {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  location: string;
}

// GitHub Webhook Events
export interface GitHubPullRequestEvent {
  action: string;
  pull_request: {
    number: number;
    title: string;
    body: string;
    head: {
      sha: string;
      ref: string;
    };
    base: {
      sha: string;
      ref: string;
    };
    user: {
      login: string;
    };
  };
  repository: {
    name: string;
    full_name: string;
    owner: {
      login: string;
    };
  };
}

export interface GitHubCheckRunEvent {
  action: string;
  check_run: {
    id: number;
    conclusion: string;
    output: {
      text?: string;
    };
  };
  repository: {
    name: string;
    full_name: string;
  };
}

// Job Context
export interface PRAnalysisJob {
  id: string;
  prContext: PRContext;
  timestamp: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  error?: string;
}
