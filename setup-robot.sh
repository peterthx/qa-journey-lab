#!/bin/bash
set -e

# 1. Verify python3 is installed
if ! command -v python3 &> /dev/null
then
    echo "python3 could not be found, please install it before running this script"
    exit 1
fi

# 2. Create and activate a virtual environment
python3 -m venv venv_robot
source venv_robot/bin/activate

# 3. Install dependencies
pip install -r robotTestsAPIs/requirements.txt

# 4. Run tests
cd robotTestsAPIs
robot -d results tests

# 5. Deactivate and remove the virtual environment
deactivate
rm -rf venv_robot
