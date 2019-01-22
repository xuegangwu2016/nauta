define({"0":{i:0.00805883450392566,u:"../Content/NAUTA V1.0/index.htm",a:"Nauta software provides a multi-user, distributed computing environment for running deep learning model training experiments.  Results of experiments, can be viewed and monitored using a command line interface, web UI and/or TensorBoard*. You can use existing data sets, use your own data, or ...",t:"Product Overview"},"1":{i:0.00805883450392566,u:"../Content/NAUTA V1.0/legal.htm",a:"Copyright © 2018 Intel Corporation. All rights reserved. * Other names and brands may be claimed as the property of others. Please refer to the Legal and Licensing information in the README files provided with this release.  NO LICENSE, EXPRESS OR IMPLIED, BY ESTOPPEL OR OTHERWISE, TO ANY ...",t:"Terms and Conditions"},"2":{i:0.00874384169800261,u:"../Content/NAUTA V1.0/concepts.htm",a:"The following concepts and terms are relevant to using this software. User The user is a data scientist who wants to perform deep learning experiments to train models that will, after training and testing, be deployed in production. Using Nauta, the user can define and schedule containerized deep ...",t:"Basic Concepts"},"3":{i:0.00874384169800261,u:"../Content/NAUTA V1.0/install_configure.htm",a:"The section provides instructions for installing and configuring Nauta to run on your client system.  For instructions to install and configure Nauta to run on the host server, refer to the Nauta Installation and Configuration Guide. Supported Operating Systems The Nauta client software runs on the ...",t:"Client Installation and Configuration"},"4":{i:0.0638681652709836,u:"../Content/NAUTA V1.0/getting_started.htm",a:"This section of the guide provides brief examples for performing some of the most essential and valuable tasks supported by Nauta software.  Note: Several commands and training scripts in this section require access to the internet to download data, scripts, etc. The section discusses the following ...",t:"Getting Started"},"5":{i:0.0382113011773819,u:"../Content/NAUTA V1.0/working_with_datasets.htm",a:"The section covers the following topics: Uploading Datasets nctl mount Command Mount and Access Folders Uploading and Using Shared Dataset Example Uploading Datasets Nauta offers two ways for users to upload and use datasets for experiments: Uploading During Experiment Submission Uploading ...",t:"Working with Datasets"},"6":{i:0.00874384169800261,u:"../Content/NAUTA V1.0/working_with_experiments.htm",a:"This section provides instructions about the following topics: Mounting Experiment Input to Nauta Storage Launching Jupyter Interactive Notebook Submitting Multiple Experiments Running an Experiment on Multiple Nodes Mounting  Storage to View Experiment Output Canceling Experiments   Note: Files ...",t:"Working with Experiments"},"7":{i:0.0132490569737765,u:"../Content/NAUTA V1.0/mount_exp_input.htm",a:" Perform these steps to mount a local folder/machine to Nauta storage and use those files when performing training. Note: Names below are examples only. Linux/macOS: Create a folder for mounting named my_input: $ mkdir my_input Use the mount command to display the command that should be used to ...",t:"Mounting Experiment Input to Nauta Storage"},"8":{i:0.252768064184443,u:"../Content/NAUTA V1.0/experiment.htm",a:"This overall purpose of this command and subcommands is to submit and manage experiments. Following are the subcommands for the nctl experiment command. submit Subcommand list Subcommand cancel Subcommand view Subcommand logs Subcommand interact Subcommand template_list Subcommand submit Subcommand ...",t:"experiment Command"},"9":{i:0.00929755707110053,u:"../Content/NAUTA V1.0/launch_jupyter.htm",a:"You can use Jupyter* Notebook to run and display the results of you experiments. This release of Nauta supports Python 3 an 2.7 for scripts. Launch Jupyter Notebook using the following command: Syntax: nctl experiment interact [options] Other available options to this command are: name - The name of ...",t:"Launching Jupyter* Interactive Notebook"},"10":{i:0.00805883450392566,u:"../Content/NAUTA V1.0/submit_single_exp.htm",a:"Submitting a Single Experiment Note: Your script must be written to process your input data as it is presented, or conversely, your data must be formatted to be processed by your script. No specific data requirements are made by the Nauta software. Please refer to  Submitting an Experiment .  ",t:"Submitting a Single Experiment"},"11":{i:0.00929755707110053,u:"../Content/NAUTA V1.0/submit_mult_exp.htm",a:"This section describes how to launch multiple experiments using the same script. Storage locations for your input and output folders are determined by the mount command. Refer to  Working with Datasets  and  Mounting Experiment Input to Nauta Storage To submit multiple individual experiments that ...",t:"Submitting Multiple Experiments"},"12":{i:0.00929755707110053,u:"../Content/NAUTA V1.0/submit_mult_nodes.htm",a:" Run an Experiment on Multiple Nodes This section describes how to submit an experiment to run on multiple processing nodes, to accelerate the job.  Storage locations for your input and output folders are determined by the mount command.   This experiment uses a template. For more information, refer ...",t:" Run an Experiment on Multiple Nodes"},"13":{i:0.00929755707110053,u:"../Content/NAUTA V1.0/mount_exp_output.htm",a:"Mounting  Storage to View Experiment Output Refer to the section  Working with Datasets .  ",t:"Mounting  Storage to View Experiment Output"},"14":{i:0.00929755707110053,u:"../Content/NAUTA V1.0/cancel_exp.htm",a:"To cancel one or more experiments, use the following command: $ nctl experiment cancel [options]EXPERIMENT_NAME This command stops and cancels any experiment queued or in progress. Completed experiments cannot be cancelled.  Cancels any experiment based on the name of an experiment/pod/status of a ...",t:"Canceling Experiments"},"15":{i:0.042750584171608,u:"../Content/NAUTA V1.0/template_packs.htm",a:"What is a Template Pack? The Anatomy of a Pack Provided Template Packs Customizing the Provided Packs Creating a New Template Pack Placeholders in values.yaml  What is a Template Pack? Every experiment run on the Nauta application utilizes a template pack. For each experiment, a template pack ...",t:"Working with Template Packs"},"16":{i:0.0122007627903025,u:"../Content/NAUTA V1.0/view_exp.htm",a:"This section discusses the following topics: Viewing Experiments Using the CLI Viewing Experiment Logs and Results Data   Launching TensorBoard to View Experiments Viewing Experiments Using the CLI Viewing all Experiments To list all experiments you have submitted, run the next command.  The ...",t:"Evaluating Experiments"},"17":{i:0.0115157555962255,u:"../Content/NAUTA V1.0/view_exp_logs.htm",a:"Each experiment generates logs. This is the information generated during the run of the experiment and saved. If an experiment did not print out data during execution, the logs will be blank. Separate from logs, the results or output of an experiment can be found by mounting the user’s output folder ...",t:"Viewing Experiment Logs and Results Data"},"18":{i:0.0183019430194858,u:"../Content/NAUTA V1.0/view_exp_tensorbd.htm",a:"You can launch TensorBoard from the Nauta Web UI or the CLI. These methods are described below. Launching TensorBoard from the Web UI Note: To view the experiment’s results in TensorBoard, TensorBoard data must be written to a folder in the directory /mnt/output/experiment. To launch TensorBoard ...",t:"Launching TensorBoard to View Experiments"},"19":{i:0.0155300291212629,u:"../Content/NAUTA V1.0/inference_testing.htm",a:"For guidance on using inference testing to evaluate an experiment, refer to the topics shown below: For a discussion of the nctl predict command and its subcommands and parameters, refer to  predict Command For a demonstration of how to run batch inference, refer to:  Batch Inference Example  .  For ...",t:"Evaluating Experiments with Inference Testing"},"20":{i:0.0268542136817218,u:"../Content/NAUTA V1.0/predict.htm",a:"Synopsis Use this command to start, stop, and manage prediction jobs. batch Subcommand cancel Subcommand launch Subcommand list Subcommand stream Subcommand batch Subcommand Synopsis Starts a new batch instance that will perform prediction on provided data. Uses a specified dataset to perform ...",t:"predict Command"},"21":{i:0.0280022344513994,u:"../Content/NAUTA V1.0/batch_inf_example.htm",a:" Example Flow Following is the general flow of this example:  The user has acquired the dataset and the trained model. The user converts dataset into serialized protocol buffers (PBs). Refer to  https://developers.google.com/protocol-buffers/  as one information source. The user invokes nctl mount. ...",t:"Batch Inference Example "},"22":{i:0.0200680262584614,u:"../Content/NAUTA V1.0/stream_inf_example.htm",a:"Example Flow Following is the basic task flow for this example. The user has saved a trained Tensorflow Serving compatible model. The user will be sending data for inference in JSON format, or in binary format using gRPC API. The user runs nctl predict launch command. The user sends inference data ...",t:"Streaming Inference Example"},"23":{i:0.00874384169800261,u:"../Content/NAUTA V1.0/managing_users_resources.htm",a:"Managing Users and Resources This section discusses the following topics: Creating a User Account Deleting a User Account Viewing all User Activity Accessing the Kubernetes Dashboard  ",t:"Managing Users and Resources"},"24":{i:0.00991691835468797,u:"../Content/NAUTA V1.0/create_user.htm",a:"The user is the data scientist who wants to perform deep learning experiments to train models that will, after training and testing, be deployed in the field. The user has full control (list/read/create/terminate) over his/her own experiments and has read access (list/read) of experiments belonging ...",t:"Creating a User Account"},"25":{i:0.00991691835468797,u:"../Content/NAUTA V1.0/delete_user.htm",a:"Only an administrator can delete a user.  Deleting a user removes that user\u0027s account from the Nauta software; that user will not be able to log in to the system. This will halt and remove all experiments and pods, however all artifacts related to that user\u0027s account, such as the users input and ...",t:"Deleting a User Account"},"26":{i:0.00991691835468797,u:"../Content/NAUTA V1.0/view_user_act.htm",a:"The command nctl user list lists all users and their activity. The following information is displayed. Name (user name) Creation date (the date this user account was created) Date of last submitted job (experiment) Number of running jobs (experiments) Number of queued jobs (experiments submitted but ...",t:"Viewing All User Activity"},"27":{i:0.0167031057779483,u:"../Content/NAUTA V1.0/accessing_kubernetes.htm",a:"Kubernetes provides a way to manage containerized workloads and services, to manage resources given to a particular experiment and monitor workload statuses and resource consumption. Here is an overview:  https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/ To access ...",t:"Accessing the Kubernetes Resource Dashboard"},"28":{i:0.0306332476749839,u:"../Content/NAUTA V1.0/view_cli_help.htm",a:"This section discusses the following topics: Viewing CLI Command Help at the Command Line experiment Command launch Command mount Command user Command verify Command version Command Viewing CLI Command Help at the Command Line The –help options provides man-page style help for each nctl command. You ...",t:"CLI Commands"},"29":{i:0.0785168883960976,u:"../Content/NAUTA V1.0/launch.htm",a:"Synopsis This command launches a browser for the web UI or TensorBoard. webui Subcommand tensorboard Subcommand webui Subcommand Synopsis Launches the Nauta web user interface.  Syntax nctl launch webui [options Arguments None. Options Returns Link to an exposed application.  Examples nctl launch ...",t:"launch Command"},"30":{i:0.0785168883960976,u:"../Content/NAUTA V1.0/mount.htm",a:"Synopsis The mount command displays another command that can be used to mount/unmount a client\u0027s folders on/from his/her local machine. See also  list Subcommand . Syntax nctl mount [options] Options   Returns This command returns another command that can be used to mount a client\u0027s folders on ...",t:"mount Command"},"31":{i:0.0785168883960976,u:"../Content/NAUTA V1.0/user.htm",a:"Use this command to create, delete, and manage users. create Subcommand delete Subcommand list Subcommand create Subcommand Synopsis Creates and initializes a new Nauta user. This command must be executed when kubectl is used by a nctl command entered by a k8s administrator. If this command is ...",t:"user Command"},"32":{i:0.0117787060055914,u:"../Content/NAUTA V1.0/verify.htm",a:"Synopsis Checks whether all prerequisites required by nctl are installed and have proper versions. Syntax nctl verify Options Returns In the case of any installation issues, the command returns information about their cause (which application should be installed and in which version). If no issues ...",t:"verify Command"},"33":{i:0.0117787060055914,u:"../Content/NAUTA V1.0/version.htm",a:"version Command Synopsis Returns the version of Nauta. Syntax nctl version Options Returns The version command returns the currently installed nctl application version of both client platform and server.",t:"version Command"},"34":{i:0.014845021927186,u:"../Content/NAUTA V1.0/unmount.htm",a:"Perform these steps to unmount previously mounted Nauta storage from a local folder/machine. Use the mount command to display the command that should be used to unmount your local folder/machine from your Nauta input folder: $ nctl mount Execute the unmount using umount or net use as appropriate. ...",t:"Unmounting Experiment Input to Storage"},});