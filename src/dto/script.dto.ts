interface ScriptDto {
    scriptId?: number;
    scriptName: string;
    threadNum: number;
    stressTime: number;
    fileMd5: string;
    status?: boolean;
}

export {
    ScriptDto
}