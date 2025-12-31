export type SessionStatus = 'scheduled' | 'live' | 'finished' | 'delayed';

export interface Session {
    id: string;
    title: string;
    speaker?: string;
    start_time: string; // ISO string
    end_time: string;   // ISO string
    status: SessionStatus;
    is_delayed: boolean;
    delay_minutes: number;
    created_at?: string;
}
