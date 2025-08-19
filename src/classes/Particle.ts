class Particle {
    protected _x: number;
    protected _y: number;
    protected isShaking = false;
    protected isCollapse = false;
    protected localCollapseX = 0;
    protected localCollapseY = 0;
    protected shakeEnergy = 15;
    protected ctx: CanvasRenderingContext2D;
    constructor(
        protected canvas: HTMLCanvasElement,
        protected x: number,
        protected y: number,
        protected r: number,
        protected cor: string
    ) {
        this._x = x;
        this._y = y;
        this.ctx = canvas.getContext("2d")!;
    }

    shake() {
        this.isShaking = true;
        this.shakeEnergy = 15;
    }

    collapse(localX: number, localY: number) {
        this.isCollapse = true;
        this.localCollapseX = localX;
        this.localCollapseY = localY;
    }

    colisao() {
        if (this.x + this.r >= this.canvas.width)
            this.x = this.canvas.width - this.r;
        else if (this.x - this.r <= 0) this.x = this.r;

        if (this.y + this.r >= this.canvas.height)
            this.y = this.canvas.height - this.r;
        else if (this.y - this.r <= 0) this.y = this.r;
    }

    update(
        mx: number | null,
        my: number | null,
        orientationX: number = 0,
        orientationY: number = 0
    ) {
        const dx = this.x - (mx || -100);
        const dy = this.y - (my || -100);
        const distancia = Math.sqrt(dx ** 2 + dy ** 2);

        if (!this.isCollapse) {
            if (distancia <= 100) {
                const forca = (100 - distancia) / 100;
                const angulo = Math.atan2(dy, dx);
                const velocidadeX = Math.cos(angulo) * forca;
                const velocidadeY = Math.sin(angulo) * forca;
                this.x += velocidadeX;
                this.y += velocidadeY;
            } else if (this.isShaking) {
                this.y -= 5;
                this.shakeEnergy--;
                if (this.shakeEnergy <= 0) this.isShaking = false;
            } else {
                const diffX = this._x - this.x;
                const diffY = this._y - this.y;

                this.x += diffX * 0.1;
                this.y += diffY * 0.1;

                this.x += orientationX * 0.15;
                this.y += orientationY > 0 ? 0 : orientationY * 0.3;
            }
        } else {
            const alvoX = this.localCollapseX;
            const alvoY = this.localCollapseY;

            const forcaX = alvoX - this.x;
            const forcaY = alvoY - this.y;

            const distancia = Math.sqrt(forcaX ** 2 + forcaY ** 2);
            if (distancia > 1) {
                const fatorDeAceleracao = 1 / (distancia * 0.1);
                this.x += forcaX * fatorDeAceleracao;
                this.y += forcaY * fatorDeAceleracao;
            }
            if (forcaX > 0 && forcaX < 10) {
                this._x = 0;
                this.cor = "transparent";
            }
            this.r *= 0.98;
        }

        this.colisao();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.cor;
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

export default Particle;
