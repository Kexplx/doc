// WPF Backgroundworker
// Never process large operations on the UI Thread since this will lock the entire interface 
// and make it not response until the task has finished.
// Instead use a backgroundworker


// Access UI from Backgroundworker
//  To do this we need to call the worker's ProgressChanged() Method. 
// This will call the method we subscriped the ProgressChanged event to.
// The important thing now is that this subscribed-to method will be executed by the UI and not the worker.
// So in this Method we can touch all of the UI elements and update it accordingly.

public void StartDoingSomeThingEvent(object sender, EventArgs e)
{
	var worker = new Backgroundworker(); // initialize worker
	worker.ReportsProgress = true; // if you want to report progress (just set it true)
	worker.ProgressChanged += UpdateSomethingOnUI; // subscribe to the method from which we can update the UI
	worker.DoWork += BigTaskMethod; // subscribe to Method that will be executed after RunWorkerAsync, do main task here
	worker.WorkerSupportsCancellation = true // to cancel the worker

	worker.RunWorkerAsync(); // start worker, notice the overload RunWorkerAsync(object o) to pass arguments to the DoWorkMethod
}

public void BigTaskMethod(object sender, DoWorkEventArgs e)
{
	//here we do the heavy lifting

	(object as sender).ReportProgress(0); // Calls the subscribed method
	(object as sender).ReportProgress(0, null); // overloaded to give an object to method


}

// Subscribed to worker.ProgressChanged, processed by the UI Thread whenever we call worker.ReportProgress()
public void UpdateSomethingOnUI(object sender, ProgressChangedEventArgs e)
{
	var sendObject = e.UserState as MySendClass); // get the object (second paramter) cast accordingly
	var progress = e.ProgressPercentage; // just get the int
}