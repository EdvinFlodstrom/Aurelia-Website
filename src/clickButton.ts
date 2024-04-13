export class ClickButton {
    public isClickEnabled: boolean = false;
    public amountOfClicks: number = 0;
    private secondsToClick: number = 10;
    public secondsRemaining: number = 10;
    public countdownSecondsRemaining: number = 3;
    public isCountdownEnabled: boolean = true;
    private timerInterval: NodeJS.Timeout | null = null;
    private countdownInterval: NodeJS.Timeout | null = null;
    private cps: number;

    private startTimer() {
        this.isClickEnabled = true;
        this.timerInterval = setInterval(() => {
            if (this.secondsRemaining > 0) {
                this.secondsRemaining--;
            } else {
                clearInterval(this.timerInterval);
                this.isClickEnabled = false;
                this.cps = this.amountOfClicks / this.secondsToClick;
            }
        }, 1000);
    }

    public startCountdownTimer() {
        this.isCountdownEnabled = false;
        this.countdownInterval = setInterval(() => {
            if (this.countdownSecondsRemaining > 0) {
                this.countdownSecondsRemaining--;
            } else {
                clearInterval(this.countdownInterval);
                this.startTimer();
            }
        }, 1000);
    }
    
    public incrementAmountOfClicks() {
        this.amountOfClicks++;
    }
}
