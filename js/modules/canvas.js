export default class CanvasAnimation{
    canvas = document.getElementById("musicPlayerCanvas");
    ctx = this.canvas.getContext("2d");
    width = this.canvas.width;
    height = this.canvas.height;
    context = new AudioContext(); 
    analyser = this.context.createAnalyser(); 
    dataArray = new Uint8Array(this.analyser.frequencyBinCount); 
    bufferLength = this.analyser.frequencyBinCount; 
    barWidth = (this.width / this.bufferLength) * 1.5;
    constructor(audio){
        this.audio = audio;
    }

    songCreation(){
        const src = this.context.createMediaElementSource(this.audio);
        this.analyser.fftSize = 512; 
        this.analyser.connect(this.context.destination);  
        src.connect(this.analyser);
        this.barHeight;
    }
    songAnimation() {
        let x = 0;
        this.analyser.getByteFrequencyData(this.dataArray);
        this.ctx.fillStyle = '#180534'; 
        this.ctx.fillRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.bufferLength; i++) {
            this.barHeight = this.dataArray[i] - 150 ;
            let r = this.barHeight + 299 / 1.8 + ((i/this.bufferLength)) - 15;
            let g = 110 * (i/this.bufferLength);
            let b = 120 + i ;
            this.ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            this.ctx.fillRect(x + 2, this.height - this.barHeight, this.barWidth, this.barHeight - 1);
            x += this.barWidth + 1;
        }
        requestAnimationFrame(this.songAnimation);
    }
}

