/**
 * 定义悬浮按钮类
 */
export class SuspensionButtonEntity {
    private href?: string;
    private icon?: string;
    private text: string;
    private width?: number;
    private height?: number;
    public constructor(text: string, href?: string, icon?: string, width?: number, height?: number) {
        this.href = href;
        this.icon = icon;
        this.text = text;
        this.width = width;
        this.height = height;
    }

    get getHref() {
        return this.href;
    }

    get getIcon() {
        return this.icon;
    }

    get getText() {
        return this.text;
    }

    get getWidth() {
        return this.width;
    }

    get getHeight() {
        return this.height;
    }
}

export default SuspensionButtonEntity;