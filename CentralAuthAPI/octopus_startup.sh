#!/bin/bash 
 
 cmd="up"
 octopus=0
 project_name="MyApp"
 while getopts ":n:c:o" opt; do
  case $opt in
	o) octopus=1
    ;;
	n) project_name="$OPTARG"
	;;
    c) cmd="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    ;;
  esac
done