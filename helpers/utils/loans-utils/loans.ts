export class DateTimeUtils {
    // /**
    //  * Converts a UTC date-time string to IST (UTC+5:30).
    
  static convertUTCtoIST(utcDateTime: string): string {
        const utcDate = new Date(utcDateTime); // Parse the input UTC date
        const istOffset = 5 * 60 + 30; // Convert 5 hours 30 minutes into minutes
        const istDate = new Date(utcDate.getTime() + istOffset * 60 * 1000); // Adjust time
    
        return istDate.toISOString().replace('T', ' ').replace('Z', '');
    }

}
   
export class calculateTitleFees {
        /**
         * Calculates the total sum of an array of numbers.
         * @param amounts - An array of numbers representing amounts.
         * @returns The total sum of the amounts.
         */
        static calculateTotalAmount(amounts: number[]): number {
            if (!Array.isArray(amounts) || amounts.length === 0) {
                throw new Error("Invalid input");
            }
    
            const total = amounts.reduce((sum, amount) => sum + amount, 0);
            console.log(`Total Calculated Amount: ${total}`);
            return total;
        }
    

    }

    export class liabilityAmount {
       
        static calculateLiabilityAmount(amounts: number[]): number {
            if (!Array.isArray(amounts) || amounts.length === 0) {
                throw new Error("Invalid input");
            }
    
            const total = amounts.reduce((sum, amount) => sum + amount, 0);
            console.log(`Total Calculated Amount: ${total}`);
            return total;
        }
    

    }